<?php 
	session_start();

$id_sitio=$_GET['id_sitio'];

$err_level = error_reporting(0);
 $mysqli = mysqli_connect('sql213.main-hosting.eu', 'u157010430_AR','u157010430_ARpass','u157010430_arterupestre');
 	
?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

<meta http-equiv="content-type" content="text/html;charset=utf-8" />
<script language="JavaScript" type="text/JavaScript"></script>
<head>
<title>Relatório de <?php echo"Lista Territorio" ?></title>

<div id="Layer1" style="position:absolute; left:13px; top:16px; width:625px; height:910px; z-index:3">

  </title>

<script language="JavaScript" type="text/JavaScript">
<!--
function MM_reloadPage(init) {  //reloads the window if Nav4 resized
  if (init==true) with (navigator) {if ((appName=="Netscape")&&(parseInt(appVersion)==4)) {
    document.MM_pgW=innerWidth; document.MM_pgH=innerHeight; onresize=MM_reloadPage; }}
  else if (innerWidth!=document.MM_pgW || innerHeight!=document.MM_pgH) location.reload();
}
MM_reloadPage(true);
//-->

function printPage()
{
	window.print();
}
</script>

</head>

<body>
<table  border="0" cellspacing="0" cellpadding="0">
	<tr bgcolor="#FFFFFF">
	<td width="143" nowrap="nowrap"></td>
     <td width="482" ><div align="center" class="subHeader"><strong>Arte Rupestre </strong></div></td>
   </tr>	    
</table>
	<?php 
	/* -----------        ciclo para escrever os sitio        ---------------------- */
		$j=0;	
		$sql = "SELECT * FROM sitio id_sitio = '$id_sitio' ";


	$res = mysqli_query($mysqli , $sql);	
		while ($res1 = @mysqli_fetch_array($res))
		{	
		    	if($k >= '2' ) 
 {
	echo"<div style=\"page-break-after: always\"></div> </style>";
	$k='0';	
}
	$k=$k+1;
			$j=$j+1;				
			$id_sitio = $res1['id_sitio'];	
		$conservacao = $res1['conservacao'];	
		$nome = $res1['nome'];
		$toponimo = $res1['toponimo'];
		$descricao = $res1['descricao'];
		$interpretacao = $res1['interpretacao'];	
		$classificacao = $res1['classificacao'];
		$cod_classificacao = $res1['cod_classificacao'];	
		$periodo_cultural = $res1['periodo_cultural'];	
		$lugar = $res1['lugar'];
		$freguesia1 = $res1['freguesia1'];	
		$freguesia2 = $res1['freguesia2'];	
		$area = $res1['area'];
		$coord_X = round($res1['coord_X'],2);	
		$coord_Y = round($res1['coord_Y'],2);	
		$coord_Z= round($res1['coord_Z'],2);
		$acessos = $res1['acessos'];	
		$prosp_data = $res1['prosp_data'];	
		$tipo_acesso= $res1['tipo_acesso'];
		$vest_arq= $res1['vest_arq'];
		$observacoes = $res1['observacoes'];	
	
		if ($conservacao == 'NULL') $conservacao ='';
		if ($nome == 'NULL') $nome ='';
		if ($toponimo == 'NULL') $toponimo ='';
		if ($descricao == 'NULL') $descricao ='';
		if ($interpretacao == 'NULL') $interpretacao ='';
		if ($classificacao == 'NULL') $classificacao ='';
		if ($cod_classificacao == 'NULL') $cod_classificacao ='';
		if ($periodo_cultural == 'NULL') $periodo_cultural ='';
		if ($lugar == 'NULL') $lugar ='';
		if ($freguesia1 == 'NULL') $freguesia1 ='';
		if ($freguesia2 == 'NULL') $freguesia2 ='';
		if ($area == 'NULL') $area ='';
		if ($coord_X == 'NULL') $coord_X ='';
		if ($coord_Y == 'NULL') $coord_Y ='';
		if ($coord_Z == 'NULL') $coord_Z ='';
		if ($acessos == 'NULL') $acessos ='';
		if ($prosp_data == 'NULL') $prosp_data ='';
		if ($tipo_acesso == 'NULL') $tipo_acesso ='';
		if ($vest_arq == 'NULL') $vest_arq ='';
		if ($observacoes == 'NULL') $observacoes ='';
			
			echo"<table width=\"850\">
			<tr>
				<td   width=\"500\" height=\"35\" bgcolor=\"#C6BCA4\"  ><span class=\"navText\"><strong> $nome</strong> </td>										
			<td  width=\"300\" height=\"35\" valign=\"left\" bgcolor=\"#C6BCA4\"><span class=\"navText\"><strong>Top&oacute;nimo: </strong>$toponimo </span></td>											

			</tr>";	
			echo"</table><table width=\"850\">";
			echo"<tr><td ><span class=\"navText\" >$descricao </td></tr>";
			if($interpretacao)	
			echo"<tr><td ><span class=\"navText\" ><strong>Interpretação:</strong>$interpretacao </td></tr>";	
				echo"</table><table width=\"850\">";
			if($classificacao)
			{
			echo"<tr><td  width=\"300\" ><span class=\"navText\"><strong>Classifica&ccedil;&atilde;o: </strong>$classificacao </td>
			<td width=\"300\"><span class=\"navText\"><strong>CNS: </strong>$cod_classificacao </span></td></tr>";	
			}
			
			if($lugar)
			echo"<tr><td   ><span class=\"navText\" >Concelho: $lugar </td></tr>";
			if($freguesia1)
			{
			echo"<tr><td   ><span class=\"navText\" >Freguesia: $freguesia1</td>";
				if($freguesia2)
				echo"<td ><span class=\"navText\" > $freguesia2</td>";
			echo"</tr>";	
			}	
		echo"</table><table width=\"850\">";
            if(($coord_X) or ($coord_Y) and 	($coord_Z)  )	
            {
			echo"<tr><td  width=\"100\"  ><span class=\"navText\" ><strong>Coordenadas:  </strong> </td>";
			echo"<td  width=\"250\"  ><span class=\"navText\" ><strong> X:    </strong> $coord_X   </td>";
			echo"<td  width=\"250\"  ><span class=\"navText\" ><strong>Y:    </strong>$coord_Y  </td>";
			echo"<td  width=\"250\"  ><span class=\"navText\" ><strong> Cota:    </strong>$coord_Z m </td></tr>";
            }
            	echo"</table><table width=\"850\">";
            if($area)
			echo"<tr><td  ><span class=\"navText\" ><strong>Área:</strong> $area </td></tr>";
				if($acessos) 
			echo"<tr><td  valign=\"left\"><span class=\"navText\"> <strong><strong>Acessos: </strong></strong>$acessos</span></td></tr>";	
			 if($tipo_acesso)
			echo"<tr><td  valign=\"left\"><span class=\"navText\"> <strong>Tipo de acesso: </strong>$tipo_acesso</span></td></tr>";	
		
			  echo"<br> </table> "; 
			
		/* -----------         ciclo para escrever as Tipologia       ---------------------- */

				
		$sqleed = "SELECT * FROM sitio_rela_tipo  where id_sitio = '$id_sitio' order by tipo";
		$reseed = @mysqli_query($mysqli , $sqleed);	
			while(($res1eed = @mysqli_fetch_array($reseed)))
			{		
					$tipo = $res1eed['tipo'];
					$cronologia = $res1eed['cronologia'];
	
					if ($tipo == 'NULL') $tipo ='';
					if ($cronologia == 'NULL') $cronologia ='';
					
				 if($tipo)	
				 {
				 echo"<table width=\"850\"><tr>";	
				echo "<td  width=\"150\" valign=\"left\"><span class=\"navText\"><strong>Tipologia:</strong> $tipo</span></td>";
				if($cronologia)		
				echo"<td  width=\"200\" valign=\"left\"><span class=\"navText\"> $cronologia</span></td>";
				 echo"</tr></table>";
				 }
			
	}	
	 echo"</tr></table>";
	@mysqli_free_result($res1eed); 	
	/* -----------        fim de ciclo para escrever as Tipologia      ---------------------- */
	/* -----------        ciclo para escrever o Periodo Cultural      ---------------------- */
				
		$sqleed = "SELECT * FROM rela_sitio_percultural  where id_sitio = '$id_sitio' order by periodo";
		$reseed = @mysqli_query($mysqli , $sqleed);	
			$i=0;
			while(($res1eed = @mysqli_fetch_array($reseed)))
			{		
					$periodo = $res1eed['periodo'];
					if ($periodo == 'NULL') $periodo ='';

					 if($i == '0')	
					 	echo "<td  width=\"150\" valign=\"left\"><span class=\"navText\"><strong>Período Cultural:</strong> $periodo</span></td>";
					 else 
					 echo"<td  width=\"150\" valign=\"left\"><span class=\"navText\"> ; $periodo </td>";
				     $i=$i+1;

	}	
	 echo"</tr></table>";
	@mysqli_free_result($res1eed); 	
	/* -----------        fim de ciclo para escrever Periodo Cultural      ---------------------- */
		/* -----------         ciclo para escrever intervenções  ---------------------- */

		$sqleei = "SELECT * FROM sitio_rela_int  where id_sitio = '$id_sitio' order by tipo";
		$reseei = @mysqli_query($mysqli , $sqleei);	
			$i=0;
			echo"<table width=\"200\"><tr><td bgcolor=\"#F5D0A9\" width=\"200\" valign=\"left\"><span class=\"navText\"><strong>Interven&ccedil;&otilde;es arqueol&oacute;gicas</strong> </span></td></tr>";	

			while(($res1eei = @mysqli_fetch_array($reseei)))
			{		
			    
					$tipo = $res1eei['tipo'];
				    $ano = $res1eei['ano'];
					$responsavel = $res1eei['responsavel'];
					if ($tipo == 'NULL') $tipo ='';
					if ($ano == 'NULL') $ano ='';
					if ($responsavel == 'NULL') $responsavel ='';
					 if($i == '0')	
				 
					echo"<table width=\"850\">";
				 if($tipo)	
				echo"<tr><td  width=\"155\" valign=\"left\"><span class=\"navText\">  $tipo</span></td>";
					if($ano)
				echo"<td  width=\"95\" valign=\"left\"><span class=\"navText\"> Ano: $ano</span></td>";
				if($responsavel)
				echo"<td  width=\"600\" valign=\"left\"><span class=\"navText\"> Respons&aacute;vel : $responsavel</span></td>";
				 echo"</tr>";
	}
	 echo"</table>";
	@mysqli_free_result($res1eei);
		/* -----------        fim de ciclo para escrever intervenções     ---------------------- */

	/* -----------        ciclo para escrever o Contexto Geográfico      ---------------------- */
				
		$sqleed = "SELECT * FROM sitio_contexto_geog  where id_sitio = '$id_sitio' order by relevo_geral";
		$reseed = @mysqli_query($mysqli , $sqleed);	
			$i=0;
			while(($res1eed = @mysqli_fetch_array($reseed)))
			{		
					$relevo_geral = $res1eed['relevo_geral'];
				    $unidade_relevo = $res1eed['unidade_relevo'];
					$local_implantacao = $res1eed['local_implantacao'];
				if ($relevo_geral == 'NULL') $relevo_geral ='';
				if ($unidade_relevo == 'NULL') $unidade_relevo ='';
				if ($local_implantacao == 'NULL') $local_implantacao ='';
				
				 echo"<table width=\"850\"><tr>";	
				echo "<td  width=\"150\" valign=\"left\"><span class=\"navText\"><strong>Contexto Geográfico:</strong> </span></td></tr><tr>";	
				 if($relevo_geral)	
				echo"<td  width=\"200\" valign=\"left\"><span class=\"navText\"> Relevo geral : $relevo_geral</span></td>";
				 if($unidade_relevo)	
				echo"<td  width=\"200\" valign=\"left\"><span class=\"navText\"> Unidade de Relevo : $unidade_relevo</span></td>";
				 if($local_implantacao)	
				echo"<td  width=\"200\" valign=\"left\"><span class=\"navText\"> Local de implantação : $local_implantacao</span></td>";
				 echo"</tr></table>";

	}	
	 echo"</tr></table>";
	@mysqli_free_result($res1eed); 	
	/* -----------        fim de ciclo para escrever Contexto Geográfico      ---------------------- */
		/* -----------       ciclo para escrever o Contexto Geológico      ---------------------- */
				
		$sqleed = "SELECT * FROM sitio_contexto_geol  where id_sitio = '$id_sitio' order by substrato_geol";
		$reseed = @mysqli_query($mysqli , $sqleed);	
			$i=0;
			while(($res1eed = @mysqli_fetch_array($reseed)))
			{		
					$substrato_geol = $res1eed['substrato_geol'];
				    $material = $res1eed['material'];
					$descricao = $res1eed['descricao'];
					
				if ($substrato_geol == 'NULL') $substrato_geol ='';				
				if ($material == 'NULL') $material ='';
				if ($descricao == 'NULL') $descricao ='';
					 if($i == '0')	
				 echo"<table width=\"850\"><tr><td  width=\"150\" valign=\"left\"><span class=\"navText\"><strong>Contexto Geológico:</strong> </span></td></tr><tr>";	
				if($substrato_geol)
				echo"<td  width=\"200\" valign=\"left\"><span class=\"navText\"> Substrato geológico: $substrato_geol</span></td>";
				if($material)
				echo"<td  width=\"200\" valign=\"left\"><span class=\"navText\">Material: $material</span></td>";
				if($descricao) 
				echo"<td  width=\"200\" valign=\"left\"><span class=\"navText\"> Descrição : $descricao</span></td>";
				 echo"</tr>";

	}
	 echo"</table>";
	@mysqli_free_result($res1eed); 
		/* -----------        fim de ciclo para escrever Contexto Geológico      ---------------------- */
		/* -----------        ciclo para escrever a hidrografia      ---------------------- */
				
		$sqleed = "SELECT * FROM sitio_hidrografia  where id_sitio = '$id_sitio' order by tipo,nome ";
		$reseed = @mysqli_query($mysqli , $sqleed);	
			$i=0;
			while(($res1eed = @mysqli_fetch_array($reseed)))
			{		
					$tipo = $res1eed['tipo'];
				    $nome = $res1eed['nome'];
					$distancia = $res1eed['distancia'];
					$acesso = $res1eed['acesso'];
					$uso = $res1eed['uso'];
					if ($tipo == 'NULL') $tipo ='';
					if ($nome == 'NULL') $nome ='';
					if ($distancia == 'NULL') $distancia ='';
					if ($acesso == 'NULL') $acesso ='';
					if ($uso == 'NULL') $uso ='';
					 if($i == '0')	
				 echo"<table width=\"850\"><tr><td  width=\"150\" valign=\"left\"><span class=\"navText\"><strong>Contexto Hidrográfico:</strong> </span></td></tr><tr>";	
				
				 if($tipo)	
				echo"<td  width=\"200\" valign=\"left\"><span class=\"navText\"> Tipo: $tipo</span></td>";
				if($nome)
				echo"<td  width=\"200\" valign=\"left\"><span class=\"navText\">Nome: $nome</span></td>";
					if($distancia)
				echo"<td  width=\"200\" valign=\"left\"><span class=\"navText\"> Distância : $distancia</span></td>";
			 if($acesso)
				echo"<td  width=\"200\" valign=\"left\"><span class=\"navText\"> Acesso : $acesso</span></td>";
				if($uso) 	
				echo"<td  width=\"200\" valign=\"left\"><span class=\"navText\"> Uso : $uso</span></td>";
				 echo"</tr>";
	}	
	 echo"</table>";
	@mysqli_free_result($res1eed);
	/* -----------        fim de ciclo para escrever  a hidrografia      ---------------------- */
	/* -----------       ciclo para escrever uso de solo     ---------------------- */
				
		$sqleed = "SELECT * FROM sitio_uso_solo  where id_sitio = '$id_sitio' order by tipo";
		$reseed = @mysqli_query($mysqli , $sqleed);	
			$i=0;
			while(($res1eed = @mysqli_fetch_array($reseed)))
			{		
					$tipo = $res1eed['tipo'];
				    $descricao = $res1eed['descricao'];
					$acesso = $res1eed['acesso'];
					if ($tipo == 'NULL') $tipo ='';
					if ($descricao == 'NULL') $descricao ='';
					if ($acesso == 'NULL') $acesso ='';
					 if($i == '0')	
				 echo"<table width=\"850\"><tr><td  width=\"150\" valign=\"left\"><span class=\"navText\"><strong>Uso de solo:</strong> </span></td></tr><tr>";	
				if($tipo)
				echo"<td  width=\"200\" valign=\"left\"><span class=\"navText\"> Tipo: $tipo</span></td>";
				if($descricao) 
				echo"<td  width=\"200\" valign=\"left\"><span class=\"navText\"> $descricao</span></td>";
				if($acesso)
				echo"<td  width=\"200\" valign=\"left\"><span class=\"navText\"> Acesso : $acesso</span></td>";
				
				 echo"</tr>";

	}	
	 echo"</table>";
	@mysqli_free_result($res1eed);
	/* -----------        fim de ciclo para escrever uso de solo     ---------------------- */
	/* -----------      ciclo para escrever uso de solo  antigo   ---------------------- */
				
		$sqleed = "SELECT * FROM sitio_uso_solo_hist  where id_sitio = '$id_sitio' order by tipo";
		$reseed = @mysqli_query($mysqli , $sqleed);	
			$i=0;
			while(($res1eed = @mysqli_fetch_array($reseed)))
			{		
					$tipo = $res1eed['tipo'];
				    $descricao = $res1eed['descricao'];
					$cronologia = $res1eed['cronologia'];
					if ($tipo == 'NULL') $tipo ='';
					if ($descricao == 'NULL') $descricao ='';
					if ($cronologia == 'NULL') $cronologia ='';
					 if($i == '0')	
				 echo"<table width=\"850\"><tr><td  width=\"150\" valign=\"left\"><span class=\"navText\"><strong>Uso de solo:</strong> </span></td></tr><tr>";	
				if($tipo)
				echo"<td  width=\"200\" valign=\"left\"><span class=\"navText\"> Tipo: $tipo</span></td>";
				if($descricao)
				echo"<td  width=\"200\" valign=\"left\"><span class=\"navText\"> $descricao</span></td>";
				if($cronologia) 
				echo"<td  width=\"200\" valign=\"left\"><span class=\"navText\"> Cronologia : $cronologia</span></td>";
				
				 echo"</tr>";

	}
	 echo"</table>";
	@mysqli_free_result($res1eed);
	/* -----------        fim de ciclo para escrever uso de solo     ---------------------- */

	echo"</table><table width=\"850\">";
			if($observacoes)
			  echo"<tr><td  ><span class=\"navText\"><strong>Observações : </strong>$observacoes </td></tr>";
			  echo"</table><table width=\"850\">";
		/* -----------        ciclo para escrever as imagens         ---------------------- */		
		
		 echo" <table width=\"200\"> <tr ><div align=\"left\">				
		 <td  bgcolor=\"#F5D0A9\" ><span class=\"navText\"><strong>Imagens</strong> </span>  ";
echo" </table >	";
		echo"<table width=\"850\">";
			$sqlit = "SELECT * FROM imagem where id_sitio = '$id_sitio' and objecto = 'Sítio' ";
			$resit = @mysqli_query($mysqli , $sqlit);	
			echo"  <table width=\"850\"><tr>"; 		
			$i=0;				  
			while(($resiit = @mysqli_fetch_array($resit)))
			{			
			if($i==3)
			{
				$i=0;
				echo"<br></tr><tr><td>";
			}
				$filename=$resiit['ficheiro'];
				$descr=$resiit['descricao'];
				$inventario=$resiit['inventario'];
					if ($descr == 'NULL') $descr ='';
				$path=$filename-'.jpg';
				echo"<td><center>";	
				?>             
				<img   style="border:3px double #e3d9d1 " src="../Ficheiros/Imagem/<?php echo   $path.'/thumb_'.$filename;?>"  />	           			
				<?php
					if ($descr) 
				echo"<br><span class=\"navText\" > $descr  </span>";	
				echo"</td>";
				$i=$i+1;		
			}
			
		echo"</tr></table>";	
		@mysqli_free_result($resit);

		/* -----------        fim de ciclo para escrever as imagens         ---------------------- */		
			/* -----------        ciclo para escrever a bibliografia   ---------------------- */


			$sqlbb="SELECT rmb.paginas as paginas, b.autor as autor, b.titulo as titulo,b.editora as editora,b.url as url, b.ano as ano, b.serieColeccao as serieColeccao FROM  rela_bibli rmb left outer join  bibliografia b ON b.id_bibliografia = rmb.id_bibliografia  and  rmb.id_sitio = '$id_sitio'  where  rmb.id_sitio = '$id_sitio' order by autor, ano";

			
$resultadob = @mysqli_query($mysqli , $sqlbb);	
                 echo" <table width=\"200\"> <tr ><div align=\"left\">				
		 <td  bgcolor=\"#F5D0A9\" ><span class=\"navText\"><strong>Bibliograf&iacute;a</strong> </span>  ";
echo" </table >	";
		echo"<table width=\"850\">";
			while(($resultadob1 = @mysqli_fetch_array($resultadob)))	
		{						
			$autor = $resultadob1['autor'];
			$ano = $resultadob1['ano'];	
			$tipo = $resultadob1['tipo'];	
			$titulo = $resultadob1['titulo'];	
			$url = $resultadob1['url'];	
			$editora = $resultadob1['editora'];	
			$serieColeccao= $resultadob1['serieColeccao'];
			$paginas = $resultadob1['paginas'];	
			
			if ($editora == 'NULL') $editora ='';
			if ($serieColeccao== 'NULL') $serieColeccao='';
			if ($url == 'NULL') $url ='';
			if ($ano== 'NULL') $ano='';
			else $ano='('+$ano+')';
			if ($paginas == 'NULL') $paginas ='';
			if (($tipo =='Revista') or ($tipo =='Ata de Congresso'))
			echo" <tr>
			<td  ><span class=\"navText\"><div align=\"left\"><strong> $autor </strong>($ano):$titulo   <i>$serieColeccao </i>  $editora   p. $paginas. </div>";
			else 	
					echo" <tr>
			<td  ><span class=\"navText\"><div align=\"left\"><strong> $autor </strong>($ano):<i>$titulo </i>  $serieColeccao  $editora   p. $paginas. </div>";
		}	
		echo" </td></tr></table >	";
		@mysql_free_result($resultadob1); 	

	}	/* -----------        fim de ciclo de sitio---------------------- */			
													
	?> 
	</body>
	</html>	