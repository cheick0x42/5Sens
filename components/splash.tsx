import * as React from "react";
import {Image, StyleSheet, View} from "react-native";

const Splash = () => {
  	
  	return (
    		<View style={styles.splashScreen61}>
      			<Image style={[styles.planDeTravail1Copie3dat1, styles.planLayout]} resizeMode="cover" source="Plan de travail 1 copie 3Dat 1.png" />
      			<Image style={styles.planDeTravail1Copie8dat1} resizeMode="cover" source="Plan de travail 1 copie 8Dat 1.png" />
      			<Image style={[styles.planDeTravail1Copie3dat2, styles.planLayout]} resizeMode="cover" source="Plan de travail 1 copie 3Dat 2.png" />
    		</View>);
};

const styles = StyleSheet.create({
  	planLayout: {
    		height: 2001,
    		width: 2001,
    		position: "absolute"
  	},
  	planDeTravail1Copie3dat1: {
    		top: -1159,
    		left: -877,
    		display: "none"
  	},
  	planDeTravail1Copie8dat1: {
    		marginLeft: -162.5,
    		top: 341,
    		left: "50%",
    		width: 326,
    		height: 132,
    		position: "absolute"
  	},
  	planDeTravail1Copie3dat2: {
    		top: 0,
    		left: 0
  	},
  	splashScreen61: {
    		backgroundColor: "#286d7a",
    		flex: 1,
    		width: "100%",
    		height: 812,
    		overflow: "hidden"
  	}
});

export default Splash;
