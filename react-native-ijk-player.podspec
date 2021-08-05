require 'json'

package = JSON.parse(File.read(File.join(__dir__, './package.json')))

Pod::Spec.new do |s|
  s.name           = 'react-native-ijk-player'
  s.version        = package['version']
  s.summary        = package['description']
  s.description    = package['description']
  s.license        = package['license']
  s.author         = package['author']
  s.homepage       = package['homepage']
  s.source         = { :git => 'https://github.com/nghinv-software/react-native-ijk-player', :tag => s.version }

  s.requires_arc   = true
  s.platform       = :ios, '8.0'
  s.source_files   = 'ios/*.{h,m}'
  s.resource     = 'libIJKPlayerSDK/libIJKPlayerSDK/LiveSDKResource.bundle'
  s.vendored_libraries  = 'libIJKPlayerSDK/libIJKPlayerSDK/libIJKPlayerSDK.a'
  s.frameworks = "AVFoundation", "CoreMedia", 'VideoToolbox', 'Accelerate', 'AudioToolbox', 'Foundation','GLKit'
  s.libraries = 'c++'
  s.dependency 'React'
end
