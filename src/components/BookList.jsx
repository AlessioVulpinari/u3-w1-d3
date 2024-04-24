import { Container, Form, InputGroup, Row } from "react-bootstrap"
import SingleBooks from "./SingleBooks"
import { Component } from "react"

class BookList extends Component {
  state = { bookName: "", array: this.props.category }

  handleSearch = () => {
    const search = this.props.category.filter((book) => book.title.includes(this.state.bookName))
    this.setState({ array: search })
  }

  render() {
    return (
      <Container>
        <InputGroup className='mb-3'>
          <Form.Control
            placeholder='Ricerca libro...'
            aria-label='Libro'
            aria-describedby='basic-addon1'
            onChange={(e) => {
              this.setState({ bookName: e.target.value })
              this.handleSearch()
            }}
          />
        </InputGroup>

        <Row className='row-cols-xl-4 row-cols-md-3 row-cols-sm-2 row-cols-1'>
          {this.state.array.map((book) => {
            return SingleBooks(book)
          })}
        </Row>
      </Container>
    )
  }
}

export default BookList