const HomePageCard = ({item}) => {
  return (
    <a href="magical_form">
    <div
    class="relative overflow-hidden rounded-lg shadow-lg cursor-pointer m-4 dark:bg-gray-600 duration-300 ease-in-out transition-transform transform hover:-translate-y-2 ">
    <img class="object-cover w-full h-full"
      src={item.url}
      alt="Flower and sky" />
    <div class="absolute top-1/2 w-full flex justify-center">
        <h1 class="text-2xl font-bold text-orange-500 uppercase">{item.name}</h1>
    </div>
      </div>
      </a>
  );
};
export default HomePageCard;
