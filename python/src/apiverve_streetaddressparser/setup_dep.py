from setuptools import setup, find_packages

setup(
    name='apiverve_streetaddressparser',
    version='1.2.5',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'requests',
        'setuptools'
    ],
    description='Street Address Parser is an address parsing API that breaks raw US street addresses into structured location components. Pass any single-line address string to extract the building number, directional, street name, street type, unit, city, state abbreviation, and postal code. Set standardize=true to get the address type (street, PO box or intersection) free, and on paid plans the mailing-format delivery line, last line and ZIP+4.',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://apiverve.com/marketplace/streetaddressparser?utm_source=pypi&utm_medium=referral&utm_content=homepage',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)
