class BooksController < BlocWorks::Controller
  def welcome
    render :welcome, book: "Eloquent Ruby"
  end

  def index
    @books = Book.all
    render :index
  end

  def create

  end

  def show
    book = Book.find(params['id'].to_i)
    render :show, book: book
  end

  def update
    
  end

  def destroy
    @book = Book.find(params['id'].to_i)
    @book = null
    render :index
  end
end
