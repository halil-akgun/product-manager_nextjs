"use client";
import React from "react";
import styles from "./index.module.scss";
const Test = () => {

	const handleClick = () => {
		alert("test")
	}

	return (
		<div className={styles.testComp}>
			<button onClick={handleClick}>Test</button>
		</div>
	);
};

export default Test;
