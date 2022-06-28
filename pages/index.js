function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen md:flex-row text-center text-4xl">
      <div>
        Wanna watch
        <a className="flex items-center justify-center font-bold">
          The Umbrella Academy S3
        </a>
        with me?
        <div className="flex items-center justify-center mt-8 text-2xl">
          <button className="rounded-md border-solid py-1 px-4 hover:bg-black hover:text-white">Yes</button>
          <button className="rounded-md border-solid py-1 px-4 hover:bg-black hover:text-white ml-20">No</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
