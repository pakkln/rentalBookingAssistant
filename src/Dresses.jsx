function Dresses({setPage, setSelectedDress}){
    const dresses=[
        {
            id: 1,
            name: "Peony Scarf Dress",
            price: 690,
            image: "/dress1.jpg",
        },
        {
            id: 2,
            name: "Sylvia Dress",
            price: 450,
            image: "/dress2.jpg",
        },
        {
            id: 3,
            name: "Falene Dress",
            price: 530,
            image: "/dress3.jpg",
        },
        {
            id: 4,
            name: "Tail Merle Dress",
            price: 700,
            image: "/dress4.jpg",
        },
        {
            id: 5,
            name: "Mora Dress",
            price: 490,
            image: "/dress5.jpg",
        },
        {
            id: 6,
            name: "Claudiene Dress",
            price: 600,
            image: "/dress6.jpg",
        },
        {
            id: 7,
            name: "Jaquime Dress",
            price: 590,
            image: "/dress7.jpg",
        },
        {
            id: 8,
            name: "Babyblue Dress",
            price: 700,
            image: "/dress8.jpg",
        },

    ];

    function handleSelectedDress(dress){
        setSelectedDress(dress);
        setPage("detail");
    }

    return(
        <div style={{padding:"20px"}}>
            <h1>Browse Dress</h1>

            <div style={{
                display:"grid",
                gridTemplateColumns: "repeat(4,1fr)",
                gap:"16px",
            }}
            >
                {dresses.map((dress)=>(
                    <div
                    key={dress.id}
                    onClick={()=>handleSelectedDress(dress)}
                    style={{
                        cursor:"pointer",
                        border: "1px solid black",
                    }}
                    >
                        <img src={dress.image} 
                        style={{
                            width:"100%",
                            height: "350px",
                            objectFit:"cover",

                        }}/>

                        <div style={{padding:"10px"}}>
                            <p style={{margin:"0",fontWeight:"bold"}}>
                                {dress.name}
                            </p>

                            <p style={{margin: "4px 0 0 0"}}>
                                {dress.price.toLocaleString()} THB per day
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dresses;