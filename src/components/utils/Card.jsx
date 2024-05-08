function Card({ paragraph, url, alt, name, role }) {
  return (
    <div>
      <div className="md:w-[30vw]">
        <figure className="flex flex-col items-start justify-center p-4 bg-white rounded-lg shadow-xl text-text-primary">
          <p className="my-4 text-[14px]">{paragraph}</p>
          <figcaption className="flex items-center justify-center ">
            <img className="rounded-full w-9 h-9" src={url} alt={alt} />
            <div className="text-left ms-3">
              <p className="text-sm font-bold">{name}</p>
              <div className="text-sm text-[#4F96FF]">{role}</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
export default Card;
