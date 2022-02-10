const { render } = require("../../../helpers/jestSassHelper")

describe('test boxBtnHomeLinkStyle', () => {
    
    const file = "src/components/boxBtnHomeLink/_boxBtnHomeLinkStyle.scss"
    
    test('Render', async () => {
        
        return render({
            file: file
        })
    });
});
