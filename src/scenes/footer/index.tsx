
const Footer = () => {

  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0 ">
          <h3 className="text-3xl">Body Symphony</h3>
          <p className="my-5">
            Experience the future of fitness. Embrace the power of state-of-the-art facilities
            and unlock your true potential. Your journey starts here.
          </p>
          <p>© All Rights reserved</p>
        </div>

        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Address</p>
          <p className="my-5">Info</p>
          <p className="my-5">Founders</p>
        </div>

        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Sponsors</h4>
          <p className="my-5">Ambassadors</p>
        </div>
      </div>
    </footer>)
}

export default Footer