<script>
  const counties = [
    "Bomet", "Bungoma", "Busia", "Elgeyo-Marakwet", "Embu", 
    "Garissa", "Homa Bay", "Isiolo", "Kajiado", "Kakamega", 
    "Kericho", "Kiambu", "Kilifi", "Kirinyaga", "Kisii", 
    "Kisumu", "Kitui", "Laikipia", "Lamu", "Machakos", 
    "Makueni", "Mandera", "Marsabit", "Meru", "Migori", 
    "Nairobi City", "Nakuru", "Narok", "Nyamira", "Nyandarua", 
    "Samburu", "Siaya", "Taita-Taveta", "Tana River", 
    "Tharaka-Nithi", "Trans Nzoia", "Turkana", "Uasin Gishu", 
    "Vihiga", "Wajir", "West Pokot", "Mombasa"
  ];

  const select = document.getElementById('county');
  counties.forEach(county => {
    const option = document.createElement('option');
    option.value = county.toLowerCase().replace(/\s+/g, '-');
    option.textContent = county;
    select.appendChild(option);
  });