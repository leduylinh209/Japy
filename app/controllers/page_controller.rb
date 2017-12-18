class PageController < ApplicationController
	def home
		@vocabs = Vocal.all
	end
end
