@extends('layouts.auth')
@section('title','Login')
@section('content')
<div class="container-xxl">
    <div class="authentication-wrapper authentication-basic container-p-y">
      <div class="authentication-inner py-4">
        <!-- Login -->
        <div class="card">
          <div class="card-body">
            <!-- Logo -->
            <div class="app-brand justify-content-center mb-4 mt-2">
              <a href="{{ route('home')}}" class="app-brand-link gap-2">
                <span class="app-brand-logo d-none">
                    <img src="https://dawatehadiyah.org/wp-content/uploads/2022/01/Logo-1.svg" alt="Dawat-E-Hadiya">
                </span>
{{--                  <span class="app-brand-text demo text-body fw-bold ms-1">{{ config('app.name')}}</span>--}}
              </a>
            </div>
            <!-- /Logo -->
            <h4 class="mb-1 pt-2">ERED Management System</h4>
            <p class="mb-4">Please sign-in to your account</p>

            <form id="formAuthentication" class="mb-3" action="{{route('login')}}" method="post">
              @csrf
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input
                  type="text"
                  class="form-control"
                  id="email"
                  name="email"
                  value="{{ old('email') }}"
                  placeholder="Enter your email"
                  autofocus />
                @error('email')
                  <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                  </span>
                @enderror
              </div>
              <div class="mb-3 form-password-toggle">
                <div class="d-flex justify-content-between">
                  <label class="form-label" for="password">Password</label>
                  <a href="{{route('password.request')}}">
                    <small>Forgot Password?</small>
                  </a>
                </div>
                <div class="input-group input-group-merge">
                  <input
                    type="password"
                    id="password"
                    class="form-control"
                    name="password"
                    placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                    aria-describedby="password" />
                  <span id="toggle-password" class="input-group-text cursor-pointer"><i id="icon" class=" ti ti-eye-off"></i></span>
                  @error('password')
                  <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                  </span>
                @enderror
                </div>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="remember-me" />
                  <label class="form-check-label" for="remember-me"> Remember Me </label>
                </div>
              </div>
              <div class="mb-3">
                <button class="btn btn-primary d-grid w-100" type="submit">Sign in</button>
              </div>
            </form>

          </div>
        </div>
@endsection
@push('js')
<script>
    document.getElementById('toggle-password').addEventListener('click', function() {
        var passwordInput = document.getElementById('password');
        var button = document.getElementById('toggle-password');

        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            //button.innerHtml = '<i class="ti ti-eye-off"></i>';
            document.getElementById('icon').classList.remove('ti-eye-off')
            document.getElementById('icon').classList.add('ti-eye')
        } else {
            passwordInput.type = 'password';
            //button.innerHtml = '<i class="fas fa-eye"></i>';
           document.getElementById('icon').classList.add('ti-eye-off')
            document.getElementById('icon').classList.remove('ti-eye')
        }
    });
</script>
@endpush
