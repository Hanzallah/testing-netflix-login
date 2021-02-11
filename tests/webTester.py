import time
import datetime
import json
from selenium import webdriver

# TODO Place the id strings here
# TODO Replace ID TO BE ENTERED with actual strings used on the frontend
# TODO Better format logs write out in the logger method
# TODO Finish forgot password and the fifth test

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
    -- Check if incorrect login details are handled correctly
    -- Check if empty login details are handled correctly
    -- Verify if correct login details redirect properly
    '''
    def field_validation_test(self, email_phone, password):
        log_data = {'test_name':'Field Validation Test', 'messages':[], 'error':''}

        try:
            # get a handle to the input fields, and login button
            select_email_phone = self.driver.find_element_by_id("ID TO BE ENTERED")
            select_pwd = self.driver.find_element_by_id("ID TO BE ENTERED")
            login_button = self.driver.find_element_by_id("ID TO BE ENTERED")

            # enter the email and password
            select_email_phone.clear()
            select_pwd.clear()
            select_email_phone.send_keys(email_phone)
            select_pwd.send_keys(password)
            time.sleep(1)

            # submit fields
            login_button.click()
            time.sleep(2)

            # successful login
            if (self.pageURL != self.driver.current_url):
                log_data['messages'] = log_data['messages'].append("Successful Login")
                log_data['messages'] = log_data['messages'].append("Fields Verified Successfully")
                # log back out
                logout_button = self.driver.find_element_by_id("ID TO BE ENTERED")
                logout_button.click()
                time.sleep(2)
            # wrong or empty username
            elif self.driver.find_element_by_id("Username Warner ID TO BE ENTERED") != "":
                log_data['messages'].append("Incorrect Email/Phone entered")
            # wrong or empty password
            elif self.driver.find_element_by_id("Password Warner ID TO BE ENTERED") != "":
                log_data['messages'].append("Incorrect Password entered")
        except Exception as e:
            log_data['error'] = str(e)
        
        self.logger(log_data)

    '''
    -- Verify if the "remember me" checkbox works correctly
    '''
    def remember_me_test(self, email_phone, password, checked_flag):
        log_data = {'test_name':'Field Validation Test', 'messages':[], 'error':''}

        try:
            # get a handle to the input fields, and login button
            select_email_phone = self.driver.find_element_by_id("ID TO BE ENTERED")
            select_pwd = self.driver.find_element_by_id("ID TO BE ENTERED")
            login_button = self.driver.find_element_by_id("ID TO BE ENTERED")

            # enter the email and password
            select_email_phone.clear()
            select_pwd.clear()
            select_email_phone.send_keys(email_phone)
            select_pwd.send_keys(password)
            time.sleep(1)

            # check remember me as checked_flag warrants
            select_checkbox = self.driver.find_element_by_id("ID TO BE ENTERED")
            if ((select_checkbox.is_selected() and not checked_flag) or (not select_checkbox.is_selected() and checked_flag)):
                select_checkbox.click()
            
            time.sleep(0.3)

            # submit fields
            login_button.click()
            time.sleep(2)

            # log back out
            logout_button = self.driver.find_element_by_id("ID TO BE ENTERED")
            logout_button.click()
            time.sleep(2)

            # log back in to check if remember me works
            login_button.click()
            time.sleep(2)

            # successful login again
            if (self.pageURL != self.driver.current_url):
                log_data['messages'] = log_data['messages'].append(f"Remember me {checked_flag} works")
                # log back out
                logout_button = self.driver.find_element_by_id("ID TO BE ENTERED")
                logout_button.click()
                time.sleep(2)
        except Exception as e:
            log_data['error'] = str(e)
        
        self.logger(log_data)


    '''
    -- Verify if forgot password changed password properly
    '''
    def forgot_password_test(self):
        pass

    '''
    -- Enables the logging of test results to a file
    '''
    def logger(self, log_data):
        try:
            with open("login_test_logs.txt", "a") as file:
                file.write(json.dumps(log_data))
                file.write('\n')
            file.close
        except:
            print("Couldn't write to file")

    '''
    -- Run all defined tests and log the results
    '''
    def test_runner(self):
        self.driver.get(self.url)

        '''
        -- TEST 01 - Empty fields test and incorrect fields test
        '''
        # self.field_validation_test("","")
        # self.field_validation_test("INCORRECT_EMAIL","INCORRECT_PWD")

        '''
        -- TEST 02 - successful login and correct field verification test
        '''
        # self.field_validation_test("CORRECT_EMAIL","CORRECT_PWD")

        '''
        -- TEST 03 - Remember Me test
        '''
        # self.remember_me_test("","", True)
        # self.remember_me_test("","", False)

        '''
        -- TEST 04 - Forgot Password test
        '''

        '''
        -- TEST 05 - TBD
        '''

        self.dispose()
    
    '''
    -- Dispose the driver once all tests are completed
    '''
    def dispose(self):
        self.driver.close()
'''
-- Script runner section
'''
def main():
    tester = Tester()

if __name__ == '__main__':
    main()
