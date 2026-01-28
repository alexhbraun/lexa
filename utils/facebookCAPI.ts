
// Facebook CAPI Configuration
const FB_ACCESS_TOKEN = 'EAAIZAYi4q01UBQs8PhxGoZAv8IhbiCcnhZAwnQcBVhpXtcdZBrsybSnGMCldT3teYSmC8irdr3OCvqvY92TCt2pDaHDSgXhHfNeiVJ5V6Oj58aergmjpowDwm80kOPMuCdMx06YNqDQE7S0x6H0kGwCZAV4H7AnviklZBZC5q9AZBMEt2CigeKzCnPuG5nFeqQZDZD';
const FB_PIXEL_ID = '741159712048076';

/**
 * Sends an event to Facebook Conversions API (CAPI)
 * @param eventName Standard or Custom Event Name (e.g., 'Lead', 'ViewContent')
 * @param eventId Unique ID for deduplication (must match the one sent to Pixel)
 * @param userData Object containing user data (email, phone, etc.) - keys should match FB standard (em, ph, fn, ln)
 * @param customData Any custom data to allow better segmentation
 */
export const sendFacebookCAPI = async (eventName: string, eventId: string, userData: any = {}, customData: any = {}) => {
    const url = `https://graph.facebook.com/v19.0/${FB_PIXEL_ID}/events?access_token=${FB_ACCESS_TOKEN}`;
    
    // Basic User Data (Browser provided)
    // In a real server implementation, we would get IP and User Agent from headers.
    // Client-side CAPI is limited, but we send what we can.
    const baseUserData = {
        client_user_agent: navigator.userAgent,
        ...userData
    };

    const body = {
        data: [
            {
                event_name: eventName,
                event_time: Math.floor(Date.now() / 1000),
                event_id: eventId,
                action_source: "website",
                event_source_url: window.location.href,
                user_data: baseUserData,
                custom_data: customData
            }
        ]
    };

    try {
        await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });
        console.log(`CAPI event '${eventName}' sent`);
    } catch (e) {
        console.error('CAPI error', e);
    }
};

/**
 * Helper to generate a unique Event ID
 */
export const generateEventId = (prefix: string = 'evt') => {
    return `${prefix}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};
