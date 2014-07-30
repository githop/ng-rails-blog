class PostsController < ApplicationController
	def index
		render json: Post.all 
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
