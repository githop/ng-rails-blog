class PostsController < ApplicationController
	def index
		render json: Post.all 
	end

	def show
		render json: Post.find(params[:id])
	end

	def create
		post = Post.new
		post.title = params[:title]
		post.contents = params[:contents]
		post.save 
	end

	private
	def post_params
		params.require(:post).permit(:title, :contents)
	end

	def default_serializer_options
		{
			root: false
		}
	end
end
