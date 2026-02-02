function Dresses({ setPage, setSelectedDress }) {
  const dresses = [
    { id: 1, name: "Peony Scarf Dress", price: 690, image: "/dress1.jpg" },
    { id: 2, name: "Sylvia Dress", price: 450, image: "/dress2.jpg" },
    { id: 3, name: "Falene Dress", price: 530, image: "/dress3.jpg" },
    { id: 4, name: "Tail Merle Dress", price: 700, image: "/dress4.jpg" },
    { id: 5, name: "Mora Dress", price: 490, image: "/dress5.jpg" },
    { id: 6, name: "Claudiene Dress", price: 600, image: "/dress6.jpg" },
    { id: 7, name: "Jaquime Dress", price: 590, image: "/dress7.jpg" },
    { id: 8, name: "Babyblue Dress", price: 700, image: "/dress8.jpg" },
  ];

  function handleSelectedDress(dress) {
    setSelectedDress(dress);
    setPage("detail");
  }

  return (
    <div style={{ padding: "16px", maxWidth: "1200px", margin: "0 auto" }}>
      <img
      src="/Banner.png"
      className="w-full h-[300px] object-cover"
    />
      

      <h1 style={{ marginBottom: "16px" }} className="font-serif text-4xl">Browse Dress</h1>

      <br/> <br/>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "0px",
        }}
      >
        {dresses.map((dress) => (
          <div
            key={dress.id}
            onClick={() => handleSelectedDress(dress)}
            style={{
              cursor: "pointer",
              border: "0.5px solid black",
            }}
          >
            <img
              src={dress.image}
              style={{
                width: "100%",
                aspectRatio: "3 / 4",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "10px" }}>
              <p style={{ margin: "0", fontWeight: "bold" }} className="font-serif font-bold">
                {dress.name}
              </p>
              <p style={{ margin: "4px 0 0 0" }} className="text-sm">
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
