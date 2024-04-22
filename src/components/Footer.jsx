function Footer() {
  return (
    <>
      <footer className="bg-[#000] flex flex-col sm:flex-row">
        <div className="container mx-auto">
          <div className="flex list-none gap-9 leading-[3em]">
            <div>
              <h2 className="head font-semibold text-[1.5em]">Contact us</h2>
              <div className="flex text-white gap-5">
                <li>contact@culture-clan.com</li>
              </div>
              <div className="flex text-white gap-6">
                <li>254-700-333-333</li>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
