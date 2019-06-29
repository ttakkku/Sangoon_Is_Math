from setuptools import setup, find_packages


setup(
    name             = 'Sangoon_Is_Math',
    version          = '0.1.0',
    description      = 'Math',
    long_description = open('README.md').read(),
    author           = 'ttakkku',
    author_email     = 'ttakkku@outlook.com',
    url              = 'https://...',
    download_url     = 'https://...',
    install_requires = ['requests'],
    packages         = find_packages(exclude = ['docs', 'example']),
    keywords         = ['bot', 'api', 'math'],
    python_requires  = '>=3',
    zip_safe=False,
    classifiers      = [
        'Programming Language :: Python :: 3',
        'Programming Language :: Python :: 3.2',
        'Programming Language :: Python :: 3.3',
        'Programming Language :: Python :: 3.4',
        'Programming Language :: Python :: 3.5',
        'Programming Language :: Python :: 3.6'
    ]
)