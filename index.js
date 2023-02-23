btn.addEventListener('click',()=>{
    const url = "http://localhost:7000/post"
    data ={
        name : document.querySelector("#username").value,
        pswd : document.querySelector("#password").value
    }
    //get
  /* fetch(url)
        .then((res) => res.json())
        .then((data) => console.log(data));
*/
        fetch(url,{
            method:'POST',
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        })
        fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
          })
            .then(response => {
              if (response.ok) {
                return response.json();
              } else {
                throw new Error("Error sending data.");
              }
            })
            .then(json => {
              console.log(json);
            })
            .catch(error => {
              console.error(error);
            })

});
