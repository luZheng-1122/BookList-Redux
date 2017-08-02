import React, {Component} from 'react';
import { connect } from 'react-redux';

class BookList extends Component {

    renderList() {
        return this.props.books.map((book) => {
            return(
                <li key={book.title} className="list-group-item">{book.title}</li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                 {this.renderList()} 
            </ul>
        )
    }
}

function mapStateToProps(state) {
    //this function is glue between react and redux
    //whenever the application state changes, the component will re-render 
    //means this function will be called so the props will change

    //Whatever is returned will show up as props
    //inside of BookList
    return {
        //'books' is a props, 'state.books' is a state
        books: state.books
    };
}

//‘connect’ takes a function and a component to produce a container
//then export it 
export default connect(mapStateToProps)(BookList);
//输出了一个container，外部组件调用这个组件，实际是调用了一个container
//这个container用connect连接，其中
//mapStateToProps是用来表示数据从哪里来，BookList用来显示该数据到html标签中