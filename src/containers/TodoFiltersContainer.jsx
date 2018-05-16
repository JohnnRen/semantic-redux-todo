import { connect } from "react-redux";
import { changeListFilter } from "../actions/listFilter";
import TodoFilters from "../components/TodoFilters";
const mapState = ({ todoFilter }) => ({
  acceptedFilters: todoFilter.get("accepted")
});
const mapDispatch = dispatch => ({
  changeListFilter: filter => dispatch(changeListFilter(filter))
});
export default connect(mapState, mapDispatch)(TodoFilters);
