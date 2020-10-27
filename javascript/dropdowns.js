function select_array_type(val)
{
		 var output;
            if(val== '1x1'){
                 output = `
                    \\begin{center}
                    \\begin{tabular}{|c|}
                    \\hline
                    cell1\\\\
                    \\hline
                    \\end{tabular}
                    \\end{center}`;
                                    } 
            else if(val== '1x2'){
                output = `                          
                    \\begin{center}
                    \\begin{tabular}{|c|c|}
                    \\hline
                    cell1 & cell2\\\\
                    \\hline
                    \\end{tabular}
                    \\end{center}`;
                                    } 
            else if(val=='1x3'){
                 output =  `                         
                    \\begin{center}
                    \\begin{tabular}{|c|c|c|}
                    \\hline
                    cell1 & cell2 & cell3\\\\
                    \\hline
                    \\end{tabular}
                    \\end{center}`;
                                    } 
            else if(val=='1x4'){
                output = `                          
                    \\begin{center}
                    \\begin{tabular}{|c|c|c|c|}
                    \\hline
                    cell1 & cell2 & cell3 & cell4\\\\
                    \\hline
                    \\end{tabular}
                    \\end{center}`;
                                    }   
            
            else if(val == '1x5'){
			     output =   `                        
                    \\begin{center}
                    \\begin{tabular}{|c|c|c|c|c|}
                    \\hline
                    cell1 & cell2 & cell3 & cell4 & cell5\\\\
                    \\hline
                    \\end{tabular}
                    \\end{center}`;
                                    }  
            else if(val=='2x1'){
                output = `
                    \\begin{center}
                    \\begin{tabular}{|c|}
                    \\hline
                    cell1\\\\
                    cell2\\\\
                    \\hline
                    \\end{tabular}
                    \\end{center}`;
                                    } 
            else if(val=='2x2'){
                output = `
                    \\begin{center}
                    \\begin{tabular}{|c|c|}
                    \\hline
                    cell1 & cell2\\\\
                    cell3 & cell4\\\\
                    \\hline
                    \\end{tabular}
                    \\end{center}`;
                                    }  
            else if(val=='2x3'){
                 output = `
                    \\begin{center}
                    \\begin{tabular}{|c|c|c|}
                    \\hline
                    cell1 & cell2 & cell3\\\\
                    cell4 & cell5 & cell6\\\\
                    \\hline
                    \\end{tabular}
                    \\end{center}`;
                                    } 
            else if(val=='2x4'){
                 output = `
                    \\begin{center}
                    \\begin{tabular}{|c|c|c|c|}
                    \\hline
                    cell1 & cell2 & cell3 & cell4\\\\
                    cell5 & cell6 & cell7 & cell8\\\\
                    \\hline
                    \\end{tabular}
                    \\end{center}`;
                                    } 
            else if(val=='2x5'){
                 output = `
                    \\begin{center}
                    \\begin{tabular}{|c|c|c|c|c|}
                    \\hline
                    cell1 & cell2 & cell3 &cell4 & cell5\\\\
                    cell6 & cell7 & cell8 &cell9 & cell10\\\\
                    \\hline
                    \\end{tabular}
                    \\end{center}`;
                                    } 
            else if(val=='3x1'){
                 output = `
                    \\begin{center}
                    \\begin{tabular}{|c|}
                    \\hline
                    cell1\\\\
                    cell2\\\\
                    cell3\\\\
                    \\hline
                    \\end{tabular}
                    \\end{center}`;
                                    }   
            else if(val=='3x2'){
                output = `
                    \\begin{center}
                    \\begin{tabular}{|c|c|}
                    \\hline
                    cell1 & cell2\\\\
                    cell3 & cell4\\\\
                    cell5 & cell6\\\\
                    \\hline
                    \\end{tabular}
                    \\end{center}`;
                                    } 
            else if(val=='3x3'){
                 output = `
                    \\begin{center}
                    \\begin{tabular}{|c|c|c|}
                    \\hline
                    cell1 & cell2 &cell3\\\\
                    cell4 & cell5 & cell6\\\\
                    cell7 & cell8 & cell9\\\\
                    \\hline
                    \\end{tabular}
                    \\end{center}`;
                                    } 
            else if(val=='3x4'){
                output = `
                    \\begin{center}
                    \\begin{tabular}{|c|c|c|c|}
                    \\hline
                    cell1 & cell2 & cell3 & cell4\\\\
                    cell5 & cell6 & cell7 & cell8\\\\
                    cell9 & cell10 & cell11 & cell12\\\\
                    \\hline
                    \\end{tabular}
                    \\end{center}`;
                                    }  
            else if(val=='3x5'){
                output = `
                    \\begin{center}
                    \\begin{tabular}{|c|c|c|c|c|}
                    \\hline
                    cell1 & cell2 & cell3 & cell4 & cell5\\\\
                    cell6 & cell7 & cell8 & cell9 & cell10\\\\
                    cell11 & cell12 & cell13 & cell14 & cell15\\\\
                    \\hline
                    \\end{tabular}
                    \\end{center}`;
                                    }  
            else if(val=='4x1'){
                output = `
                    \\begin{center}
                    \\begin{tabular}{|c|}
                    \\hline
                    cell1\\\\
                    cell2\\\\ 
                    cell3\\\\ 
                    cell4\\\\
                    \\hline
                    \\end{tabular}
                    \\end{center}`;
                                    }
            else if(val=='4x2'){
                 output = `
                    \\begin{center}
                    \\begin{tabular}{|c|c|}
                    \\hline
                    cell1 & cell2\\\\
                    cell3 & cell4\\\\ 
                    cell5 & cell6\\\\ 
                    cell7 & cell8\\\\
                    \\hline
                    \\end{tabular}
                    \\end{center}`;
                                    }
            else if(val=='4x3'){
                 output = `
                    \\begin{center}
                    \\begin{tabular}{|c|c|c|}
                    \\hline
                    cell1 & cell2 & cell3\\\\
                    cell4 & cell5 & cell6\\\\ 
                    cell7 & cell8 & cell9 \\\\ 
                    cell10 & cell11 & cell12\\\\
                    \\hline
                    \\end{tabular}
                    \\end{center}`;
                                    }
            else if(val=='4x4'){
                output = `
                    \\begin{center}
                    \\begin{tabular}{|c|c|c|c|}
                    \\hline
                    cell1 & cell2 & cell3 & cell4\\\\
                    cell5 & cell6 & cell7 & cell8\\\\ 
                    cell9 & cell10 & cell11 & cell12 \\\\
                    cell13 & cell14 & cell15 & cell16\\\\
                    \\hline
                    \\end{tabular}
                    \\end{center}`;
                                    }
            else if(val=='4x5'){
                 output = `
                    \\begin{center}
                    \\begin{tabular}{|c|c|c|c|c|}
                    \\hline
                    cell1 & cell2 & cell3 & cell4 & cell5\\\\
                    cell6 & cell7 & cell8 & cell9 & cell10\\\\
                    cell11 & cell12 & cell13 & cell14 & cell15 \\\\
                    cell16 & cell17 & cell18 & cell19 & cell20\\\\
                    \\hline
                    \\end{tabular}
                    \\end{center}`;
                                    }
            else if(val=='5x1'){
                output = `
                    \\begin{center}
                    \\begin{tabular}{|c|}
                    \\hline
                    cell1\\\\
                    cell2\\\\
                    cell3\\\\
                    cell4\\\\
                    cell5\\\\
                    \\hline
                    \\end{tabular}
                    \\end{center}`;
                                    }
            else if(val=='5x2'){
                 output = `
                    \\begin{center}
                    \\begin{tabular}{|c|c|}
                    \\hline
                    cell1 & cell2\\\\
                    cell3 & cell4\\\\
                    cell5 & cel6\\\\
                    cell7 & cell8\\\\
                    cell9 & cell10\\\\
                    \\hline
                    \\end{tabular}
                    \\end{center}`;
                                    }
            else if(val=='5x3'){
                 output = `
                    \\begin{center}
                    \\begin{tabular}{|c|c|c|}
                    \\hline
                    cell1 & cell2 & cell3\\\\
                    cell4 & cell5 & cell6\\\\
                    cell7 & cell8 & cell9\\\\
                    cell10 & cell11 & cell12\\\\
                    cell13 & cell14 & cell15\\\\
                    \\hline
                    \\end{tabular}
                    \\end{center}`;
                                    }
            else if(val=='5x4'){
                output = ` 
                    \\begin{center}
                    \\begin{tabular}{|c|c|c|c|}
                    \\hline
                    cell1 & cell2 & cell3 & cell4\\\\
                    cell5 & cell6 & cell7 & cell8\\\\
                    cell9 & cell10 & cell11 & cell12\\\\
                    cell13 & cell14 & cell15 & cell16\\\\
                    cell17 & cell18 & cell19 & cell20\\\\
                    \\hline
                    \\end{tabular}
                    \\end{center}`;
                                    }
            else if(val=='5x5'){
                output = `  
                    \\begin{center}
                    \\begin{tabular}{|c|c|c|c|c|}
                    \\hline
                    cell1 & cell2 & cell3 & cell4 & cell5\\\\
                    cell6 & cell7 & cell8 & cell9 & cell10\\\\
                    cell11 & cell12 & cell13 & cell14 & cel15\\\\
                    cell16 & cell17 & cell18 & cell19 & cell20\\\\
                    cell21 & cell22 & cell23 & cell24 & cell25\\\\
                    \\hline
                    \\end{tabular}
                    \\end{center}`;
                                    }
  
            
		 document.getElementById("convert").value = document.getElementById("convert").value + '\n\n' + output;
		}


function select_font_family(val)
{
    var output;
    
    if (val=='Roman'){ 
        output = '        \\textrm{Sample Text}';
    }
    else if(val=='Sans serif'){
        output='        \\textsf{Sample Text}';
    }
    else if(val=='Typewriter'){
        output='        \\texttt{Sample Text}';
    }
    
    document.getElementById("convert").value = document.getElementById("convert").value + '\n\n' + output;
    
}

function select_font_size(val)
{
    var output;
    
    if (val=='tiny'){
        output = '        \\begin{tiny} Sample Text \\end{tiny}';
    }
    else if(val=='scriptsize'){
        output='        \\begin{scriptsize} Sample Text \\end{scriptsize}';
    }
    else if(val=='footnotesize'){
        output='        \\begin{footnotesize} Sample Text \\end{footnotesize}';
    }
    else if(val=='small'){
        output='        \\begin{small} Sample Text \\end{small}';
    }
    else if(val=='normalsize'){
        output='        \\begin{normalsize} Sample Text \\end{normalsize}';
    }
    else if(val=='large'){
        output='        \\begin{large} Sample Text \\end{large}';
    }
    else if(val=='Large'){
        output='        \\begin{Large} Sample Text \\end{Large}';
    }
    else if(val=='LARGE'){
        output='        \\begin{LARGE} Sample Text \\end{LARGE}';
    }
    else if(val=='huge'){
        output='        \\begin{huge} Sample Text \\end{huge}';
    }
    else if(val=='Huge'){
        output='        \\begin{Huge} Sample Text \\end{Huge}';
    }
    
    document.getElementById("convert").value = document.getElementById("convert").value + '\n\n' + output;
    
    
}


function select_font_style(val)
{
    var output;
    
    if (val=='Medium'){
        output = '        \\textmd{Sample Text}';
    }
    else if(val=='Bold'){
        output='        \\textbf{Sample Text}';
    }
    else if(val=='Upright'){
        output='        \\textup{Sample Text}';
    }
    else if(val=='Italic'){
        output='        \\textit{Sample Text}';
    }
    else if(val=='Slanted'){
        output='        \\textsl{Sample Text}';
    }
    else if(val=='Small Caps'){
        output='        \\textsc{Sample Text}';
    }
    document.getElementById("convert").value = document.getElementById("convert").value + '\n\n' + output;
    
    
}

function select_space(val)
{
    var output;
    
    if (val=='Thin'){
        output = '        \\, ';
    }
    else if(val=='Medium'){
        output='        \\: ';
    }
    else if(val=='Thick'){
        output='        \\; ';
    }
    else if(val=='Negative'){
        output='        \\! ';
    }
    document.getElementById("convert").value = document.getElementById("convert").value + '\n\n' + output;
    
    
}

function select_font_color(val)
{
    var output;
    
    if (val=='Red'){
        output = '        {\\color{Red} Sample Text}';
    }
    else if(val=='Green'){
        output='       {\\color{Green} Sample Text}';
    }
    else if(val=='Blue'){
        output='        {\\color{Blue} Sample Text}';
    }
    else if(val=='Yellow'){
        output='       {\\color{Yellow} Sample Text}';
    }
    else if(val=='Cyan'){
        output='        {\\color{Cyan} Sample Text}';
    }
    else if(val=='Magenta'){
        output='        {\\color{Magenta} Sample Text}';
    }
    else if(val=='Teal'){
        output='        {\\color{Teal} Sample Text}';
    }
    else if(val=='Purple'){
        output='        {\\color{Purple} Sample Text}';
    }
    else if(val=='DarkBlue'){
        output='        {\\color{DarkBlue} Sample Text}';
    }
    else if(val=='DarkRed'){
        output='        {\\color{DarkRed} Sample Text}';
    }
    else if(val=='Orange'){
        output='        {\\color{Orange} Sample Text}';
    }
    else if(val=='DarkOrange'){
        output='        {\\color{DarkOrange} Sample Text}';
    }
    else if(val=='Golden'){
        output='        {\\color{Golden} Sample Text}';
    }
    else if(val=='Pink'){
        output='        {\\color{Pink} Sample Text}';
    }
    else if(val=='DarkGreen'){
        output='        {\\color{DarkGreen} Sample Text}';
    }
    else if(val=='Orchid'){
        output='        {\\color{Orchid} Sample Text}';
    }
    else if(val=='Emerald'){
        output='        {\\color{Emerald} Sample Text}';
    }
    document.getElementById("convert").value = document.getElementById("convert").value + '\n\n' + output;
}

function select_title(val)
{
    var output;
    
    if(val== 'Basic Title'){
                 output = `
                    \\title{Your Title Here}
                    \\author{Name}
                    \\date{\\today}
                    \\maketitle`;
     } 
    document.getElementById("convert").value = document.getElementById("convert").value + '\n\n' + output;

}

function select_document_type(val)
{
    var output;
    
    if(val== 'Article'){
                 output = `
                    \\documentclass{article}
                    
                        Here you insert your title and the packages you need.

                    \\begin{document}
                        Here is the body of your Latex document.
                    \\end{document}`;
    }
    else if(val=='Proc'){
        output = `
                    \\documentclass{proc}
                    
                        Here you insert your title and the packages you need.

                    \\begin{document}
                        Here is the body of your Latex document.
                    \\end{document}`;
    }
    else if(val=='Minimal'){
        output = `
                    \\documentclass{minimal}
                    
                        Here you insert your title and the packages you need.

                    \\begin{document}
                        Here is the body of your Latex document.
                    \\end{document}`;
    }
    else if(val=='Report'){
        output = `
                    \\documentclass{report}
                    
                        Here you insert your title and the packages you need.

                    \\begin{document}
                        Here is the body of your Latex document.
                    \\end{document}`;
    }
     else if(val=='Book'){
        output = `
                    \\documentclass{book}
                    
                        Here you insert your title and the packages you need.

                    \\begin{document}
                        Here is the body of your Latex document.
                    \\end{document}`;
     }
    else if(val=='Slides'){
        output = `
                    \\documentclass{slides}
                    
                        Here you insert your title and the packages you need.

                    \\begin{document}
                        Here is the body of your Latex document.
                    \\end{document}`;
    }
    else if(val=='Beamer'){
        output = `
                    \\documentclass{beamer}
                    
                        Here you insert your title and the packages you need.

                    \\begin{document}
                        Here is the body of your Latex document.
                    \\end{document}`;
    }
     else if(val=='Letter'){
       output = `
                    \\documentclass{letter}
                    
                        Here you insert your title and the packages you need.

                    \\begin{document}
                        Here is the body of your Latex document.
                    \\end{document}`;
     }
    document.getElementById("convert").value = document.getElementById("convert").value + '\n\n' + output;
    
    
}

function select_list(val)
{
    var output;
    
    if(val== 'Ordered List'){
                 output = `
                    \\begin{enumerate}
                        \\item Your First Item
                        \\item Your Second Item
                        \\item Your Third Item
                    \\end{enumerate}`;
     } 
    else if(val== 'Unordered List'){
                 output = `
                    \\begin{itemize}
                        \\item Your First Item
                        \\item Your Second Item
                        \\item Your Third Item
                    \\end{itemize}`;
     } 
    document.getElementById("convert").value = document.getElementById("convert").value + '\n\n' + output;

}

function select_figure(val)
{
    var output;
    
    if(val== 'Insert Figure'){
                 output = `
                    \\begin{figure}[ht]
                        \\caption{Figure Description Here}\\vspace{0.5cm}
                        \\centering
                        \\includegraphics[width=\\textwidth]{The address of the figure here}
                    \\end{figure}`;
     } 
    document.getElementById("convert").value = document.getElementById("convert").value + '\n\n' + output;

}

function select_picture(val)
{
    var output;
    
    if(val== 'Insert Picture'){
                 output = `
                    \\includegraphics[width=\\textwidth]{The address of the picture here}`;
     } 
    document.getElementById("convert").value = document.getElementById("convert").value + '\n\n' + output;

}

function select_language(val)
{
    var output;
    
    if(val== 'French'){
                 output = `
                        Place the next lines to the preamble:
                        \\usepackage[utf8]{inputenc}
                        \\usepackage[T1]{fontenc}
                        \\usepackage[french]{babel}`;
     } 
    else if(val== 'Greek'){
                 output = `
                        Place the next lines to the preamble:
                        \\usepackage[LGR]{fontenc}
                        \\usepackage[utf8]{inputenc}
                        \\usepackage[greek]{babel}`;
     } 
    else if(val== 'German'){
                 output = `
                        Place the next lines to the preamble:
                        \\usepackage[utf8]{inputenc}
                        \\usepackage[T1]{fontenc}
                        \\usepackage[ngerman]{babel}
                        \\usepackage{hyphenat}
                        \\hyphenation{Mathe-matik wieder-gewinnen}`;
     } 
     else if(val== 'Italian'){
                 output = `
                        Place the next lines to the preamble:
                        \\usepackage[utf8]{inputenc}
                        \\usepackage[italian]{babel}
                        \\usepackage[T1]{fontenc}`;
     } 
    else if(val== 'Russian'){
                 output = `
                        Place the next lines to the preamble:
                        \\usepackage[T2A]{fontenc}
                        \\usepackage[utf8]{inputenc}
                        \\usepackage[russian]{babel}
                        \\usepackage{hyphenat}
                        \\hyphenation{ма-те-ма-ти-ка вос-ста-нав-ли-вать}`;
     } 
   else if(val== 'Spanish'){
                 output = `
                        Place the next lines to the preamble:
                        \\usepackage[utf8]{inputenc}
                        \\usepackage[spanish]{babel}`;
     } 
    document.getElementById("convert").value = document.getElementById("convert").value + '\n\n' + output;
}

function select_package(val)
{
    var output;
    
    if (val=='amsmath'){
        output = '      \\usepackage{amsmath}';
    }
    else if(val=='amssymb'){
        output='       \\usepackage{amssymb}';
    }
    else if(val=='array'){
        output='        \\usepackage{array}';
    }
    else if(val=='babel'){
        output='       \\usepackage{babel}';
    }
    else if(val=='biblatex'){
        output='        \\usepackage{biblatex}';
    }
    else if(val=='caption'){
        output='       \\usepackage{caption}';
    }
    else if(val=='fancyhdr'){
        output='        \\usepackage{fancyhdr}';
    }
    else if(val=='float'){
        output='        \\usepackage{float}';
    }
    else if(val=='geometry'){
        output='        \\usepackage{geometry}';
    }
    else if(val=='graphicx'){
        output='        \\usepackage{graphicx}';
    }
    else if(val=='hyperref'){
        output='       \\usepackage{hyperref}';
    }
    else if(val=='microtype'){
        output='        \\usepackage{microtype}';
    }
    else if(val=='subfiles'){
        output='        \\usepackage{subfiles}';
    }
    else if(val=='subcaption'){
        output='        \\usepackage{subcaption}';
    }
    else if(val=='url'){
        output='        \\usepackage{url}';
    }
    else if(val=='utf8'){
        output='        \\usepackage[utf8]{inputenc}';
    }
    else if(val=='verbatim'){
        output='       \\usepackage{verbatim}';
    }
    else if(val=='xcolor'){
        output='       \\usepackage{xcolor}';
    }
    document.getElementById("convert").value = document.getElementById("convert").value + '\n\n' + output;
}

function select_part(val)
{
    var output;
    
    if (val=='Part'){
        output = '      \\part{Your part title}';
    }
    else if(val=='Chapter'){
        output='       \\chapter{Your chapter title}';
    }
    else if(val=='Section'){
        output='        \\section{Your section title}';
    }
    else if(val=='Subsection'){
        output='       \\subsection{Your subsection title}';
    }
    else if(val=='Subsubsection'){
        output='        \\subsubsection{Your subsubsection title}';
    }
    else if(val=='Paragraph'){
        output='       \\paragraph{Your paragraph title}';
    }
    else if(val=='Subparagraph'){
        output='        \\subparagraph{Your subparagraph title}';
    }
    document.getElementById("convert").value = document.getElementById("convert").value + '\n\n' + output;
}


function select_extras(val)
{
    var output;
    
    if (val=='Table of Contents'){
        output = '     \\tableofcontents';
    }
    else if(val=='Table of Figures'){
        output='       \\tableoffigures';
    }
    else if(val=='Page Numbering'){
        output='       \\pagenumbering{roman}';
    }
    else if(val=='List of Files'){
        output='       \\listoffiles';
    }
    document.getElementById("convert").value = document.getElementById("convert").value + '\n\n' + output;
}








