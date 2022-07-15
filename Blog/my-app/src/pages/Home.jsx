import React from 'react';
// import blog1 from '../../blog1.png'

function Home() {
	return (
		<div className="home">
			<div className="banner">
				<h1>THE BLOG </h1>
			</div>
			<div className="blog-container">
				<div className="main-blog-item">
					<div className="blog-image">
						<img src="/blog1.png" alt="" />
					</div>
					<p className="date">January 17, 2020</p>
					<h3 className="blog-title">
						Lorem ipsum ipsam, dignissimos mollitia vit
					</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur, vitae iste labore debitis quaerat,
						odio praesentium ducimus. Temporibus ut impedit illum!
					</p>
				</div>
				<aside>
					<div className="spec-blog-item">
						<div className="blog-image">
							<img src="/blog3.png" alt="" />
						</div>
						<div className="blog-text">
							<p className="date">January 17, 2020</p>
							<h3 className="blog-title">
								Lorem ipsum ipsam, dignissimos mollitia vit
					</h3>
						</div>
					</div>
					<div className="spec-blog-item">
						<div className="blog-image">
							<img src="/blog4.png" alt="" />
						</div>
						<div className="blog-text">
							<p className="date">January 17, 2020</p>
							<h3 className="blog-title">
								Lorem ipsum ipsam, dignissimos mollitia vit
					</h3>
						</div>
					</div>
					<div className="spec-blog-item">
						<div className="blog-image">
							<img src="/blog5.png" alt="" />
						</div>
						<div className="blog-text">
							<p className="date">January 17, 2020</p>
							<h3 className="blog-title">
								Lorem ipsum ipsam, dignissimos mollitia vit
					</h3>
						</div>
					</div>

				</aside>
			</div>
		</div>
	);
}

export default Home;
