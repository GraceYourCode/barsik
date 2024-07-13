const Table = ({
  image,
  name,
  cssClass,
  number,
}: {
  image: string;
  name: string;
  cssClass?: string;
  number: number;
}) => {
  return (
    <div className={`${cssClass}`}>
      <img
        src={image}
        alt={`the image of a barsik ${name}`}
        className="sm:w-44  md:w-52 lg:w-64 2xl:w-[450px] cursor-pointer"
      />
      <caption className="flex flex-col items-center text-white">
        <h1 className="font-nanum xl:text-2xl 2xl:text-4xl tracking-wider">
          10X <span className="text-green">{name}</span> Barsik
        </h1>
        <p className="text-gray flex gap-2 xl:text-sm 2xl:text-lg">
          <span>( {number} )</span>{" "}
          <span className="text-xs -translate-y-2">BARSIK to enter</span>
        </p>
      </caption>
    </div>
  );
};

export default Table;
