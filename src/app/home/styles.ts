import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 62,
    backgroundColor: "#d0d2d8",
  },
  logo: {
    width: 134,
    height: 34,
  },
  form: {
    width: "100%",
    paddingHorizontal: 16,
    gap: 7,
    marginTop: 42,
  },
  content: {
    width: "100%",
    flex: 1,
    marginTop: 24,
    padding: 24,
    paddingTop: 32,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: "#fff",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    gap: 12,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#e4e6ec",
  },
  clearButton: {
    marginLeft: "auto",
  },
  clearText: {
    fontSize: 12,
    fontWeight: 600,
    color: "#828282",
  },
});
