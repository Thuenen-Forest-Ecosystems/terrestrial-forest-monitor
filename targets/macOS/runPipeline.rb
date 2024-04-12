
# This script is used to build and pack macOS application.
# ------------------------------------------------------------
# To configure script, set these variables in the following way:
# export QT_DIR=/Users/lukasz/Qt/6.3.0/macos
require 'colorize'
require 'fileutils'
require 'optparse'

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

showMessage(ENV.has_value?("QT_DIR"))

if "#{ENV["QT_DIR"]}".empty?
    showMessage("Set \"QT_DIR\" environment variable!")
    exit 1
end

project_dir = File.expand_path("#{__dir__}/../..")
build_dir = "#{project_dir}/build/macOS"
qml_dir = "#{project_dir}/src/qml"
qt_dir = "#{ENV['QT_DIR']}/bin"
app_bundle = "#{build_dir}/CICDSetup.app"

should_build = ENV["SHOULD_BUILD"] == "true" || false
should_test = ENV["SHOULD_TEST"] == "true" || false
should_pack = ENV["SHOULD_PACK"] == "true" || false

ENV['CMAKE_PREFIX_PATH'] = ENV['QT_DIR']

showMessage("\nmacOS pipeline will run with the following setup\n
Project directory #{project_dir}\n
Build directory #{build_dir}\n
Project's qml directory #{qml_dir}\n
Qt directory #{qt_dir}\n
Should build? #{should_build}\n
Should test? #{should_test}\n
Should pack? #{should_pack}\n
")

if should_build
    if Dir.exists?(build_dir)
        FileUtils.rm_rf(build_dir)
    end

    FileUtils.mkdir_p(build_dir)
    if not Dir.exists?(build_dir)
        showErrorMessage("Couldn't create build folder!")
        exit 1
    end

    showMessage("Compiling")

    FileUtils.cd(build_dir)
    executeCommand("cmake -DCMAKE_BUILD_TYPE=Release #{project_dir}")
    executeCommand("cmake --build . --target all")
end

if should_test
    if not Dir.exists?(build_dir)
        showErrorMessage("Can't find build folder!")
        exit 1
    end

    showMessage("Running tests")

    FileUtils.cd(build_dir)
    executeCommand("cTest -C Release")
end

if should_pack
    if not Dir.exists?(app_bundle)
        showErrorMessage("Can't find app bundle folder!")
        exit 1
    end

    showMessage("Packing to disk image")
    executeCommand("#{qt_dir}/macdeployqt #{app_bundle} -qmldir=#{qml_dir} -dmg")
end

