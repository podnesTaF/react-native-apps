const googleApiKey = process.env.GOOGLE_API_KEY
export const getMapPreview = (lat, len) => {
    const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${len}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${len}&key=${googleApiKey}`
    return imagePreviewUrl
}

export const getAddress = async (lat, lng) => {
    try {
        const res = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${googleApiKey}`)
        const data = await res.json()
        if(data.results) {
            return data.results[0].formatted_address
        }
    } catch (e) {
       console.log(e)
    }
}