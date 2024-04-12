
# This script is used to generate Linux application run script or installer
# -------------------------------------------------------------------------------------------------
# To configure script, set these variables in the following way:
# export CMAKE_PREFIX_PATH=${HOME}/Qt/6.3.0/gcc_64
# export SHOULD_BUILD="true"
# export SHOULD_TEST="true"
# export SHOULD_PACK="true"

require 'colorize'
require 'fileutils'

def showMessage(message)
    puts "------------------------------------------------------------------------------------------------------"
    puts "                                             #{message}"
    puts "------------------------------------------------------------------------------------------------------"
end

def showErrorMessage(message)
    puts "------------------------------------------------------------------------------------------------------".red
    puts "                                             #{message}".red
    puts "------------------------------------------------------------------------------------------------------".red
end


def executeCommand(command)
    result = %x[ #{command} ]
    showMessage(result)

    exitStatus = $?.exitstatus
    if exitStatus != 0
        showErrorMessage("Command \'#{command}\' failed!")
        exit 1
    end
    return result
end


#--------------------------------------------------------------------------------------------------
# SETUP
#--------------------------------------------------------------------------------------------------

showMessage(ENV.has_value?("CMAKE_PREFIX_PATH"))

if "#{ENV["CMAKE_PREFIX_PATH"]}".empty?
    showMessage("Set CMAKE_PREFIX_PATH environment variable!")
    exit 1
end

project_dir = File.expand_path("#{__dir__}/../..")
build_dir = "#{project_dir}/build/linux"
qml_dir = "#{project_dir}/src/qml"
qmake_dir = "#{ENV['CMAKE_PREFIX_PATH']}/bin/qmake"
icon_dir = "#{project_dir}/resources/barcodes-scanner.png"
target_dir = "#{build_dir}/CICDSetup"

should_build = ENV["SHOULD_BUILD"] == "true" || false
should_test = ENV["SHOULD_TEST"] == "true" || false
should_pack = ENV["SHOULD_PACK"] == "true" || false

showMessage("Linux pipeline will run with the following setup\n
Project directory #{project_dir}\n
Build directory #{build_dir}\n
Project's qml directory #{qml_dir}\n
QMake directory #{qmake_dir}\n
Icon directory #{icon_dir}\n
Should build? #{should_build}\n
Should test? #{should_test}\n
Should pack? #{should_pack}\n
")

if not File.exist?(qmake_dir)
	showMessage("Found #{qmake_dir}")
	showErrorMessage("ouldn't found Qt 6.3.0 qmake executable!")
end

if should_build
	if Dir.exist?(build_dir)
	    FileUtils.rm_rf(build_dir)
	end

	FileUtils.mkdir_p(build_dir)	
	if not Dir.exists?(build_dir)
	    showErrorMessage("Couldn't create build folder!")
        exit 1
	end
	
	showMessage("Compiling")
	
	FileUtils.cd(build_dir)
	
	executeCommand("cmake -DCMAKE_BUILD_TYPE=Release ../../")
	executeCommand("make -j$(nproc)")
end

if should_test
    if not Dir.exists?(build_dir)
        showErrorMessage("Can't find build folder!")
        exit 1
    end

    showMessage("Running tests")

    FileUtils.cd(build_dir)
    executeCommand("ctest -C Release")
end

if should_pack
	if !File.exist?(target_dir)
		showErrorMessage("Can't find app executable!")
		exit 1
	end

	showMessage("Creating installer(*.run)")
	executeCommand("cqtdeployer -bin #{target_dir} -qmlDir #{qml_dir} -qmake #{qmake_dir} -targetDir #{build_dir} qif")
end

