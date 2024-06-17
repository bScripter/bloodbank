


function postData(){
const data = 
{
    donor_id:"102",
    donor_name:"william smith",
    donor_blood_type:"AB +",
    bb_id:"2001",
    age:"29",
    last_donated:"2022-02-24",
    contact_details:"ws@gmail.com, 123456789",
    address:"9, up-street, Canada"
}

fetch("http://localhost:8081/donor",
    {
        method:"post",
        body:JSON.stringify(data),
        headers:{
            "content-type":"application/json",
            "http_api_response_headers": {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT"
              }
        }
    }
)
.then(res => res.json())
.then(data => console.log(data));

}


async function displayData() {
    const donorName = document.getElementById("donorName");
    const response = await fetch("http://localhost:8081/donor");
    const body =  await response.json();
    console.log(body.message[0])
    const data = () =>{
        Object.keys(body.message[0]).forEach(key => {
            const value = body.message[0][key];
            donorName.innerText = (`Key: ${key}, Value: ${value}`);
        });
    };
    data();
    


}