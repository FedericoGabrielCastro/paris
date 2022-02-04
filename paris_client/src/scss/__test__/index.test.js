const { render } = require("../../helpers/jestSassHelper")

describe('compile index.scss', () => {
    
    test('should compile the index.scss to index.css', () => {
        
        return render({
            file: "src/scss/index.scss"
        })
    });
});