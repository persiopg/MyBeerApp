import React from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Pagination from "./Pagination";
import Carousel from "./Carousel.module.css";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

import data from "../../dataTest/MOCK_DATA.json";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const random1 = Math.floor(Math.random() * data.length);
const random2 = Math.floor(Math.random() * data.length);
const random3 = Math.floor(Math.random() * data.length);

const styles = {
	root: {
		position: "relative",
		width:"100%",
	},
	slideContainer: {
        
	},
	slide: {
		padding: 0,
		minHeight: 100,

		color: "#fff",
	},
	slide1: {
		backgroundColor: "#FEA900",
	},
	slide2: {
		backgroundColor: "#B3DC4A",
	},
	slide3: {
		backgroundColor: "#6AC0FF",
	},
};
function carouselCard(random){	
	return (
		<Link to={`/products/?user=${"persio"}&product=${data[random].id}`}>
			<p>{data[random].produto}</p>
			<img className={Carousel.imgControl} src={`https://picsum.photos/id/${data[random].imgRandom}/5000/1000`}/>
		</Link>
	);
}

class CarouselView extends React.Component {
	state = {
		index: 0,
	};

	handleChangeIndex = index => {
		this.setState({
			index,
		});
	};

	render() {
		const { index } = this.state;

		return (
			<Grid container rowSpacing={0} columnSpacing={{ xs: 0, sm: 0, md: 0 }} sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				minHeight:{xs:"300px",sm:"none"}
			}}>
				
				<Grid item xs={12} sx={{minHeight:{xs:"300px",sm:"none"}}}>
					<div style={styles.root}>
						<AutoPlaySwipeableViews
							index={index}
							onChangeIndex={this.handleChangeIndex}
							enableMouseEvents
							interval={3000}					
						>
							<div style={Object.assign({}, styles.slide, styles.slide1)}>
								{carouselCard(random1)}
							</div>
							<div style={Object.assign({}, styles.slide, styles.slide2)}>
								{carouselCard(random2)}
							</div>
							<div style={Object.assign({}, styles.slide, styles.slide3)}>
								{carouselCard(random3)}
							</div>
						</AutoPlaySwipeableViews>
						<Pagination dots={3} index={index} onChangeIndex={this.handleChangeIndex} />
					</div>
				</Grid>
				
			</Grid>
		);
	}
}

export default CarouselView;