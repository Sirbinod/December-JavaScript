import HomePageCard from "../components/HomePage/index";

const Home = () => {
  const items = [
    {
      name: "Magical Form",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXSPWJFXGxbXOawTRsrEaI4wQ3J8uCDjOKlQ&usqp=CAU",
    },
    {
      name: "Budgetion Application",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwAJIfIPoAv-rR3mC9htNJz-GGXOhhxEOFew&usqp=CAU"
    },
    {
      name: "Create a Diary",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkHELzWYlexCNLdDux4d_SbQlxLqGtFVxivA&usqp=CAU"
    },
    {
      name: "Weather Application",
      url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDCjLIybvx7FUJ0F_GgQGqwLHjjaW5c4lRug&usqp=CAU"}
  ];
  return (
    <div className="w-5/6 m-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 w-full mt-12 dark:bg-gray-800">
        {items.map((item)=>
        <HomePageCard item={item} />
          )}
      </div>
    </div>
  );
};
export default Home;
