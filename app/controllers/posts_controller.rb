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

	def update
		post = Post.find(params[:id])
		post.update_attributes(title: params[:title], contents: params[:contents])
		post.save
	end

	def destroy
		post = Post.find(params[:id])
		post.destroy
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
