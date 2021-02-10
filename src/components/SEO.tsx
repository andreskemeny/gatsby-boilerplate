import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ title, description, image } : {title: string, description: string, image: any}) => {
	const url = typeof window !== "undefined" ? window.location.href : "";
	return (
		<div className="application">
			<Helmet>
				<html lang="en" />
				<title>{title}</title>

				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta charSet="utf-8" />
				<meta name="description" content={description} />
				<meta property="og:url" content={url} />
				<meta property="og:image" content={image || "/logo.svg"} />
				<meta property="og:title" content={title} key="ogtitle" />
				<meta property="og:site_name" content={title} key="ogsitename" />
				<meta property="og:description" content={description} key="ogdesc" />
			</Helmet>
		</div>
	);
};

export default SEO;
