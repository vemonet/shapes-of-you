from setuptools import find_packages, setup

setup(
    name='shapes-of-you-etl',
    version='0.1.0',
    url='https://github.com/vemonet/shapes-of-you.git',
    author='Vincent Emonet',
    author_email='vincent.emonet@gmail.com',
    description='ETL to extract structured and semantic files from various repositories (git, LOD...).',
    packages=find_packages(),
    install_requires=open("requirements.txt", "r").readlines(),
)