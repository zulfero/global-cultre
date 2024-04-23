

function Footer() {
  return (
    <>
      <footer className="bg-stone-700 flex flex-col sm:flex-row">
        <div className="container mx-auto flex justify-between">
          <div className="flex list-none gap-9 leading-[3em]">
            <div>
              <h2 className="head font-semibold text-[1.5em] text-white ">Contact us</h2>
              <div className="flex  gap-5">
                <li className="text-[1.2em]">contact@culture-clan.com</li>
              </div>
              <div className="flex  gap-6">
                <li className="text-[1.2em]">254-700-333-333</li>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl text-white">Follow Us</h2>
            <div className="icons flex gap-6 ">
              <img
                className="site size-8"
                src="src/images/gikuyu/kalenji/luo/facebook.png"
                alt=""
              />
              <img
                className="site size-8"
                src="src/images/gikuyu/kalenji/luo/instagram.png"
                alt=""
              />
              <img
                className="site size-8"
                src="src/images/gikuyu/kalenji/luo/email.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
