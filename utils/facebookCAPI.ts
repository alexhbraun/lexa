
// Facebook CAPI Configuration
const FB_ACCESS_TOKEN = 'EAAIZAYi4q01UBQs8PhxGoZAv8IhbiCcnhZAwnQcBVhpXtcdZBrsybSnGMCldT3teYSmC8irdr3OCvqvY92TCt2pDaHDSgXhHfNeiVJ5V6Oj58aergmjpowDwm80kOPMuCdMx06YNqDQE7S0x6H0kGwCZAV4H7AnviklZBZC5q9AZBMEt2CigeKzCnPuG5nFeqQZDZD';
const FB_PIXEL_ID = '741159712048076';

/**
 * Helper to get cookie by name
 */
const getCookie = (name: string) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift();
};

/**
 * Sends an event to Facebook Conversions API (CAPI)
 * @param eventName Standard or Custom Event Name (e.g., 'Lead', 'ViewContent')
 * @param eventId Unique ID for deduplication (must match the one sent to Pixel)
 * @param userData Object containing user data (email, phone, etc.) - keys should match FB standard (em, ph, fn, ln)
 * @param customData Any custom data to allow better segmentation
 */
export const sendFacebookCAPI = async (eventName: string, eventId: string, userData: any = {}, customData: any = {}) => {
    const url = `https://graph.facebook.com/v19.0/${FB_PIXEL_ID}/events?access_token=${FB_ACCESS_TOKEN}`;
    
    // Get FBP and FBC cookies if available
    const fbp = getCookie('_fbp');
    const fbc = getCookie('_fbc');

    // Basic User Data (Browser provided)
    const baseUserData = {
        client_user_agent: navigator.userAgent,
        fbp: fbp, // Browser ID (Critical if no email/phone)
        fbc: fbc, // Click ID
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
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });
        
        if (!response.ok) {
            const errorData = await response.json();
            console.error('CAPI Failed:', errorData);
            return;
        }

        console.log(`CAPI event '${eventName}' sent`);
    } catch (e) {
        console.error('CAPI Network error', e);
    }
};

/**
 * Helper to generate a unique Event ID
 */
export const generateEventId = (prefix: string = 'evt') => {
    return `${prefix}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};
