# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


Post.create([{title: "the first db post", contents: "here is some lovely content for the first db post."}, 
	{title: "the second db post", contents: "here is some more lovely content for the second db post, enjoy!!"},
	{title: "the third and final post", contents: "here is the last of the lovely contents for the third and final db post,"}])