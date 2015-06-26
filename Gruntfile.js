module.exports=function(grunt){


grunt.loadNpmTasks('grunt-bump');

grunt.initConfig({
  bump: {
    options: {
      files: ['package.json'],
      updateConfigs: [],
      commit: true,
      commitMessage: 'Release v%VERSION%',
      commitFiles: ['package.json'],
      createTag: true,
      tagName: 'v%VERSION%',
      tagMessage: 'Version %VERSION%',
      push: false,
      pushTo: 'upstream',      
      gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
      globalReplace: false,
      prereleaseName: false,
      regExp: false
    }
  },
})




grunt.registerTask('install-hook',function(){
	var fs=require('fs');
	
	grunt.file.copy('hooks/pre-push', '.git/hooks/pre-push')

	fs.chmodSync('.git/hooks/pre-push', '755');

});

grunt.task.run('install-hook');


};

