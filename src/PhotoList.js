const PhotoList = (photos) => {
    return ( 
        <div className="photo">
            {photos.map(photo =>(
                <div className="photo-list" key={photo.id}>
                    <h5>Id: {photo.id}</h5>
                    <p>Body: {photo.body}</p>
                </div>
            ))}
        </div>
     );
}
 
export default PhotoList;