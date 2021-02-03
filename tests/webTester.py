from selenium import webdriver

class Tester:
    def __init__(self):
        super().__init__()
        self.init_tester()
        self.url = "http://localhost:3000/login"

    '''
    -- Initialize the selenium firefox driver
    '''
    def init_tester(self):
        try:
            self.driver = webdriver.Firefox(executable_path="geckodriver.exe")
        except:
            raise Exception('Could not connect to the browser.')
    
    
    '''
    -- Validate user fields in the login page
    '''
    def field_validation_test(self):
        pass

    '''
    -- Enables the logging of test results to a file
    '''
    def logger(self, log_data):
        pass

    '''
    -- Run all defined tests and log the results
    '''
    def test_runner(self):
        self.driver.get(self.url)

        self.dispose()
    
    '''
    -- Dispose the driver once all tests are completed
    '''
    def dispose(self):
        self.driver.close()

def main():
    tester = Tester()

if __name__ == '__main__':
    main()
