export default {
	tags : [],
	
	async executeWorkflow() {
	
		this.tags = await getTagWithNoDescriptions.run();
		console.log(this.tags)
		
		for(let i=0; i<this.tags.length; i++){
			console.log(this.tags[i])

			let aiDescription = await generateTagDescription.run({
				term: this.tags[i].name
			})
			console.log(aiDescription); 
			
			let updateTagResult = await updateTag.run({
				tagid: this.tags[i].uuid,
				description: aiDescription.response
			})
			console.log(updateTagResult);
		}
		return true;
	}
}