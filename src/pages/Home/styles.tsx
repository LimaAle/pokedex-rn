import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#00f"
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between"
  },

  favoriteContainer: {
    minHeight:100,
    backgroundColor: "#4EBDEF",
    borderBottomLeftRadius: 50
  },
  favoriteBackground: {
    flex: 1,
    backgroundColor: "#D7EBFF",
  },
  discountContainer: {
    minHeight:100,
    backgroundColor: "#D7EBFF",
    borderBottomLeftRadius: 50
  },
  discountBackground: {
    flex: 1,
    backgroundColor: "#fff",
  },
  routeContainer: {
    minHeight:100,
    backgroundColor: "#fff",
    borderBottomLeftRadius: 50
  },
  routeBackground: {
    flex: 1,
    backgroundColor: "#0C2944",
  },
  pointsContainer: {
    minHeight:100,
    flex: 1,
    backgroundColor: "#0C2944",
  },
});
export default styles