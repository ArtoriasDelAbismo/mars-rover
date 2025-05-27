


export async function getRoverInfo(roverName) {
    const res = await fetch(`http://localhost:3000/api/rover/${roverName}`);
    const data = await res.json(); 
    return data.rover; 
}

export async function getRoverPhotos(roverName, sol) {
    try {
        const res = await fetch(`http://localhost:3000/api/rover/${roverName}/photos?sol=${sol}`);
        
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        
        const data = await res.json();
        
    
        if (!data || !data.photos) {
            throw new Error('No photos found');
        }

        return data.photos;
    } catch (error) {
        console.error('Error fetching rover photos:', error);
        return [];  
    }
}


