const update = () =>    {

    fetch('./data.json').then(response => response.json()).then(
         (arr)=>{
            arr.data.forEach((element)  =>  {

                latitude = element.latitude;
                longitude = element.longitude;

                cases = element.infected;
                if (cases>255){
                    color = `rgb(255, 0, 0)`;
                }

                else{
                    color = `rgb(255, 255, 255)`;
                }

                // Mark on the map
                new mapboxgl.Marker({
                    draggable: true,
                    color: color
                }).setLngLat([longitude, latitude])
                .addTo(map); 

            })
        }
    );

}
update();
setInterval(update,2000);



















