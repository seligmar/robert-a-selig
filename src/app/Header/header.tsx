"use client";
import LinkComponent from "./linkComponent";
import "./header-footer.css";

export default function Header() {
	return (
		<>
			<header className="header-footer-outside">
				<div className="header-footer-inside header-inside">
					<h1>Robert A. Selig, PhD.</h1>
					{/* <Image  src={list}
          alt="list-menu"
          className="list-menu"
          /> */}
					<nav className="menu-outside">
						{/* https://blog.logrocket.com/css-style-button-accessibility/#button-accessibility */}
						{/* <nav> */}
						<LinkComponent
							linkHref={"/"}
							linkText={"About"}
						/>
						<LinkComponent
							linkHref={"/publications"}
							linkText={"Publications"}
						/>
						<LinkComponent
							linkHref={"/multimedia"}
							linkText={"Multi-Media"}
						/>
						{/* <LinkComponent linkHref={'/links'} linkText={'Links'} /> */}
						<LinkComponent
							linkHref={"/cv"}
							linkText="Curriculum Vitae"
						/>
						<LinkComponent
							linkHref={"/contact"}
							linkText={"Contact"}
						/>
						{/* </nav> */}
					</nav>
				</div>
			</header>
		</>
	);
}
