charref = re.compile(r"""
&[#]   #Start of a numeric entity reference
(
    0[0-7]+    # Octal form
  | [0-9]+     # Decimal form
  | x[0-9a-fa-F]+  # Hexadecimal form
)
;      # Trailing semicolon
""", re.VERBOSE)

