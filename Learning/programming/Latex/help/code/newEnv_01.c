# One Argument #1
# default value=blue
\newenvironment{hl}[1][blue]
{
    \begingroup     # start_tag 01
    \color{#1}      # start_tag 02
    \underline      # start_tag 03
}
{
    \color{black}   # end_tag 01
    \endgroup       # end_tag 02
}

# syntax
# \newenvironment{env_name}{start_tags}{end_tags}
