import { useNavigate } from "react-router-dom";

function Dresses({ setSelectedDress }) {
  const navigate = useNavigate();

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
    navigate("/detail");
  }

  return (
    <div className="p-4 max-w-[1200px] mx-auto">
      <img
        src="/Banner.png"
        className="w-full h-[300px] object-cover"
        alt="Banner"
      />

      <h1 className="font-serif text-4xl mt-6 mb-6">Browse Dress</h1>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-px">
        {dresses.map((dress) => (
          <div
            key={dress.id}
            onClick={() => handleSelectedDress(dress)}
            className="cursor-pointer border border-black"
          >
            <img
              src={dress.image}
              className="w-full aspect-[3/4] object-cover"
              alt={dress.name}
            />

            <div className="p-3">
              <p className="font-serif font-bold">{dress.name}</p>
              <p className="text-sm">
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
